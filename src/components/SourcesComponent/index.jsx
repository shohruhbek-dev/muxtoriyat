import { useEffect, useState } from "react";
import { getCategories } from "../../services/source";
import { useTranslation } from "react-i18next";
import {useNavigate} from "react-router-dom";

function SourcesComponent() {

  const [data, setData] = useState();
  const { t } = useTranslation();
  const navigate = useNavigate(); // initialize navigate

  const handleChange = (e) => {
    const selectedId = e.target.value;
    const selectedItem = data.find(item => String(item.id) === selectedId);
    if (selectedItem) {
      // navigate to new route and pass item via state
      navigate("/sources", { state: { item: selectedItem } });
      window.location.reload();
    }
  };

  async function fetchData() {
    const result = await getCategories("parentName.equals=Sources");
    console.log(result);
    setData(result);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <select
      onChange={handleChange}
      className="outline-0 w-[150px] truncate bg-black text-white py-1"
    >
      <option className="truncate" value="">
        {t("Sources")}
      </option>
      {data?.map((item, index) => (
        <option className="truncate" key={index} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default SourcesComponent;
