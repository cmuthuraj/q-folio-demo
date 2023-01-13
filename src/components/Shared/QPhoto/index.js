import styles from "./q-photo.module.css";
import logo from "../../../../public/logo-circles.svg";

export default function QPhoto({imagePath}) {
  return (
    <div className={styles.qPhotoWrap}>
      <div className={styles.qPhotoDiv}>
        <svg
          width="250"
          height="250"
          viewBox="0 0 520 525"
          fill="none"
          version="1.1"
          id="svg4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="image-clipper">
              <path
                d="M 247.92969 88.662109 A 214 214 0 0 0 85 296 A 214 214 0 0 0 93.701172 356.38281 A 214 214 0 0 0 256 431 A 214 214 0 0 0 417.54492 357.32617 C 423.01278 338.49378 426 318.60194 426 298 C 426 192.3159 348.844 104.72943 247.92969 88.662109 z "
                id="p1"/>
            </clipPath>
          </defs>
          <image className={styles.qPhoto} clipPath="url(#image-clipper)"
                 xlinkHref={`${imagePath[0] === '/' ? '' : '../'}${imagePath}`}/>
        </svg>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.qLogo} src={logo.src} alt="qualogy logo"/>

    </div>
  )
}