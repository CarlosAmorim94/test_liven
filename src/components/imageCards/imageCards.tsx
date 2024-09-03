"use client"
import { FC, useState } from "react"
import Image from "next/image"
import NoImage from "@/assets/images/NoImage.gif"

type IImageCardsProps = {
  image: string
  title: string
  className?: string
}

export const ImageCards: FC<IImageCardsProps> = ({
  image = "",
  title = "",
  className = "",
}) => {
  const [imageError, setImageError] = useState(false)
  return (
    <>
      {image && !imageError ? (
        <Image
          src={image}
          alt={title || "Sem descrição"}
          width={200}
          height={200}
          className={className}
          onError={() => setImageError(true)}
        />
      ) : (
        <Image
          src={NoImage}
          alt="No Image"
          width={200}
          height={200}
          className={className}
        />
      )}
    </>
  )
}
