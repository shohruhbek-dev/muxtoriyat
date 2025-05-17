import React, {useEffect, useRef, useState} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import {postArticle} from "../../services/source.js";
import {useTranslation} from "react-i18next";

const WritePage = () => {
  const {t} = useTranslation();
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
            [{'header': [1, 2, 3, false]}],
            [{'font': []}],
            ['bold', 'italic', 'underline', 'strike'],
            [{'align': ['center', 'right', 'justify', false]}],
            [{'color': []}, {'background': []}],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            ['link', 'image', 'video'],
            ['clean']
          ],
        },
      });

      quillInstance.current.on("text-change", () => {
        setArticle(quillInstance.current.root.innerHTML);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      name,
      description,
      article,
    });
    const articleData = {name: name, description: description, content: article};
    const response = await postArticle(articleData);
    console.log(response);
    if (response.status === 200) {
      alert(t("ArticleCreated"));
    } else {
      alert(t("ArticleNotCreated"));
    }
  };

  return (
    <div className="container mx-auto w-[95%] py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{t("Write Article")}</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-4">
          <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("Name")}
              className="w-full p-2 focus:outline-none focus:ring-0"
              required
          />
          <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t("Description")}
              className="w-full p-2 focus:outline-none focus:ring-0"
              required
          />
        </div>

        <div>
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
            {t("Save")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WritePage;
