import { useState } from "react"

type Props = {}

export default function Cards({ }: Props) {
 const [modal, setModal] = useState(false)
 return (
  <div className="bg-blue-900 p-10 rounded-lg">
   <div className="mx-auto max-w-sm space-y-4 rounded-lg bg-gray-200 p-4">
    <div className="flex justify-between rounded-lg bg-white px-4 py-4 text-gray-900 shadow">
     <div>
      <p>Title</p>
      <p className="text-sm text-gray-500">Subtitle</p>
      <p className="text-sm text-gray-500">Subtitle</p>
     </div>
    </div>

    <button onClick={() => setModal(true)} className="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 transition-all">
     Open Modal
    </button>
   </div>

   {modal && <>
    <div onClick={() => setModal(false)} className="fixed inset-0 bg-black/50" />
    <div className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow">
     <div className="text-xl">
      Modal
     </div>
     <div className="space-y-6 mt-6">
      <div>
       <label className="text-sm font-medium text-gray-900">Title</label>
       <input
        autoFocus
        className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm"
        type="text"
        defaultValue="Title"
       />
      </div>

      <div>
       <label className="text-sm font-medium leading-6 text-gray-900">
        Subtitle
       </label>
       <input
        className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm"
        type="text"
       />
      </div>
      <div>
       <label className="text-sm font-medium leading-6 text-gray-900">
        Subtitle
       </label>
       <input
        className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm"
        type="text"
       />
      </div>

      <div className="mt-8 space-x-6 text-right">
       <button onClick={() => setModal(false)} className="rounded px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
        Cancel
       </button>
       <button className="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 transition-all">
        Save
       </button>
      </div>
     </div>
    </div>
   </>}
  </div>
 )
}