'use client'
// import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (!files) return

    const previewURL = URL.createObjectURL(files[0])

    console.log(previewURL)

    setPreview(previewURL)
  }

  return (
    <>
      <input
        type="file"
        name="coverUrl"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
        onChange={onFileSelected}
      />

      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
