import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const ContentInput = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [publishing, setPublishing] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-start w-screen min-h-screen bg-gray-50 py-10">
      <div className="w-full max-w-3xl px-4 flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        
        {/* Title Input */}
        <div className="w-full">
          <label className="block font-semibold text-gray-700 mb-2 text-xl">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter blog title..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        {/* Rich Text Editor */}
        <div className="">
          <label className="block font-semibold text-gray-700 mb-2 text-xl">
            Content
          </label>
          <div className="h-[250px] max-h-[50vh] rounded-md">
            <ReactQuill
              value={content}
              onChange={setContent}
              theme="snow"
              className="h-full"
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ['bold', 'italic', 'underline'],
                  [{ list: 'ordered' }, { list: 'bullet' }],
                  ['link'],
                  ['clean'],
                ],
              }}
            />
          </div>
        </div>

        {/* Publish Button */}
        <div className="flex justify-end mt-10">
          <button
            disabled={publishing}
            className="px-6 py-2 text-white bg-black hover:bg-gray-800 transition rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={async () => {
              try {
                if (publishing) {
                  return toast.loading("Publishing");
                }
                setPublishing(true);
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/blog`,
                  { title, content },
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                );

                if (response) {
                  toast.success("Blog Published Successfully");
                  setPublishing(false);
                  navigate(`/blog/${response.data.id}`);
                } else {
                  toast.error("Error while publishing");
                }
              } catch (error) {
                toast.error(
                  error instanceof Error ? error.message : String(error)
                );
                setPublishing(false);
              }
            }}
          >
            {publishing ? "Publishing..." : "Publish"}
          </button>
        </div>
      </div>
    </div>
  );
};