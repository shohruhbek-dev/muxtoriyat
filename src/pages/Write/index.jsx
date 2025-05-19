import React, {useEffect, useRef, useState} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import {postArticle} from "../../services/source.js";
import {useTranslation} from "react-i18next";
import ImageResize from "quill-image-resize-module-react";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

Quill.register("modules/imageResize", ImageResize);

const WritePage = () => {
    const {t} = useTranslation();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [article, setArticle] = useState("");
    const [image, setImage] = useState(null);
    const [imageContentType, setImageContentType] = useState(null);

    const editorRef = useRef(null);
    const quillInstance = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (editorRef.current && !quillInstance.current) {
            quillInstance.current = new Quill(editorRef.current, {
                theme: "snow",
                placeholder: "Maqolani shu yerda yozing...",
                modules: {
                    toolbar: [
                        [{header: [1, 2, 3, false]}],
                        [{font: []}],
                        ["bold", "italic", "underline", "strike"],
                        [{align: ["center", "right", "justify", false]}],
                        [{color: []}, {background: []}],
                        [{list: "ordered"}, {list: "bullet"}],
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

    const setFileData = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                // eslint-disable-next-line no-unsafe-optional-chaining
                const base64 = (event.target?.result).split(",")[1];
                setImage(base64);
                setImageContentType(file.type);
            };
            reader.readAsDataURL(file);
        }
    };

    const clearInputImage = () => {
        setImage(null);
        setImageContentType(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const byteSize = (base64String) => {
        return `${(base64String.length * 3 / 4 / 1024).toFixed(2)} KB`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const articleData = {
            name: name,
            description: description,
            image: image,
            contentType: imageContentType,
            content: article,
        };
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

                    {/* IMAGE UPLOAD SECTION */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="file_image" className="text-sm font-medium">
                            {t("ArticleFaceImage")}
                        </label>

                        {image && (
                            <div>
                                <img
                                    src={`data:${imageContentType};base64,${image}`}
                                    alt="Preview"
                                    className="max-h-28 object-contain rounded border"
                                />
                                <div className="text-sm text-red-600 flex justify-between items-center mt-1">
                                    <span>{imageContentType}, {byteSize(image)}</span>
                                    <button
                                        type="button"
                                        onClick={clearInputImage}
                                        className="text-gray-500 hover:text-red-500"
                                    >
                                        <FontAwesomeIcon icon={faTimes}/>
                                    </button>
                                </div>
                            </div>
                        )}

                        <input
                            type="file"
                            id="file_image"
                            accept="image/*"
                            onChange={setFileData}
                            ref={fileInputRef}
                            className="file:mr-4 file:py-2 file:px-4
               file:rounded-md file:border-0
               file:text-sm file:font-semibold
               file:bg-blue-50 file:text-blue-700
               hover:file:bg-blue-100 transition"
                        />
                    </div>
                </div>

                <div>
                    <div
                        ref={editorRef}
                        className="bg-white border rounded-md shadow-sm"
                        style={{minHeight: "250px"}}
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
