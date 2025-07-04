import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../services/source";
import { useTranslation } from "react-i18next";

function MediaComponent() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleChange = (e) => {
    const selected = e.target.value;
    if (selected) {
      navigate(selected);
    }
  };

  async function fetchData() {
    const result = await getCategories("parentId.equals=1");
    setData(result);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <select onChange={handleChange} className="outline-0">
      <option className="bg-black" value="">
        {t('media')}
      </option>
      {data?.map((item, index) => (
        <option className="bg-black" key={index} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default MediaComponent;
