import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const WritePage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [article, setArticle] = useState("");

  const editorRef = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Maqolani shu yerda yozing...",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
            ["formula", "video"],
            ["color", "background"],
          ],
        },
      });

      quillInstance.current.on("text-change", () => {
        setArticle(quillInstance.current.root.innerHTML);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      description,
      article,
    });
  };

  return (
    <div className="container mx-auto w-[95%] py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Maqola Yozish</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Nomi
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Maqola nomi"
              className="w-full border rounded-md p-2 shadow-sm focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-1 font-medium">
              Tavsif
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Qisqacha tavsif"
              className="w-full border rounded-md p-2 shadow-sm focus:ring focus:ring-blue-200"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Maqola matni</label>
          <div
            ref={editorRef}
            className="bg-white border rounded-md shadow-sm"
            style={{ minHeight: "250px" }}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition duration-200"
          >
            Saqlash
          </button>
        </div>
      </form>
    </div>
  );
};

export default WritePage;
