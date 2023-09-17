import AdbIcon from "@mui/icons-material/Adb"
import Link from "next-intl/link"

export default function Logo() {
  return (
    <>
      <Link className="text-2xl flex flex-row items-center" href="./">
        <img className="h-14 pr-2" src="./logos/logo.png" />
        <span>Amahoro Kids</span>
      </Link>
    </>
  )
}
