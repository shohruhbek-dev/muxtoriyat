import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../services/source";

function MediaComponent() {
  const [data, setData] = useState();
  const navigate = useNavigate();

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
        Media
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
