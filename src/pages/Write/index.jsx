import React, {useEffect, useRef, useState} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import {postArticle} from "../../services/source.js";
import {useTranslation} from "react-i18next";
import ImageResize from "quill-image-resize-module-react";
import "quill/dist/quill.snow.css";
import { toast } from "react-toastify";

Quill.register("modules/imageResize", ImageResize);

const WritePage = () => {
  const {t} = useTranslation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [article, setArticle] = useState("");
  const [image, setImage] = useState(null);

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
            [{ font: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ align: ["center", "right", "justify", false] }],
            [{ color: [] }, { background: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
          ],
          imageResize: {
            modules: ["Resize", "DisplaySize", "Toolbar"],
          },
        },
      });

      quillInstance.current.on("text-change", () => {
        setArticle(quillInstance.current.root.innerHTML);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const articleData = {name: name, description: description, image: image, content: article};
    const response = await postArticle(articleData);
    if (response.status === 200) {
      toast.success(t("ArticleCreated"));
    } else {
      toast.error(t("ArticleNotCreated"));
    }
  };

  return (
    <div className="container mx-auto w-[95%] py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t("Write Article")}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("Name")}
            className="w-full p-2 focus:outline-none focus:ring-0 border-b border-gray-200"
            required
          />
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t("Description")}
            className="w-full p-2 focus:outline-none focus:ring-0 border-b border-gray-200"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImage(reader.result);
                };
                reader.readAsDataURL(file);
              }
            }}
            className="file:mr-4 file:py-2 file:px-4
               file:rounded-md file:border-0
               file:text-sm file:font-semibold
               file:bg-blue-50 file:text-blue-700
               hover:file:bg-blue-100 transition"
            name="image"
            id="image"
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
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            {t("Save")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WritePage;
