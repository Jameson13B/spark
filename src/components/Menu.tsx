import { FloatButton } from "antd"
import {
  InfoCircleOutlined,
  MenuOutlined,
  MinusCircleOutlined,
  MinusSquareOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons"

export const Menu = ({
  isDarkMode,
  openDrawer,
  shape,
  setShape,
  toggleDarkMode,
}: {
  isDarkMode: boolean
  openDrawer: () => void
  shape: "circle" | "square"
  setShape: (shape: "circle" | "square") => void
  toggleDarkMode: () => void
}) => {
  return (
    <FloatButton.Group
      className={isDarkMode ? "dark-mode" : ""}
      shape="square"
      trigger="click"
      style={{ position: "absolute", bottom: 24 }}
      icon={<MenuOutlined />}
    >
      <FloatButton
        icon={
          shape === "circle" ? <MinusSquareOutlined /> : <MinusCircleOutlined />
        }
        tooltip="Change shape"
        onClick={() => setShape(shape === "circle" ? "square" : "circle")}
      />
      <FloatButton
        icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
        onClick={toggleDarkMode}
        tooltip={isDarkMode ? "Light Mode" : "Dark Mode"}
      />
      <FloatButton
        icon={<InfoCircleOutlined />}
        tooltip="Info about Spark"
        onClick={openDrawer}
      />
    </FloatButton.Group>
  )
}
