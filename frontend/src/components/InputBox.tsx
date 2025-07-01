import type { ChangeEvent } from "react"

interface InputBoxType {
    label: string,
    type?: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputBox = ({ label, type, placeholder, onChange } : InputBoxType) => {
    return <div className="flex flex-col gap-2">
        <label className="font-medium mt-1"> { label }</label>
        <input className="p-2 bg-gray-50 rounded-md border border-gray-300 text-sm" type={ type || 'text' } placeholder={ placeholder } onChange={ onChange }/>
    </div>
}