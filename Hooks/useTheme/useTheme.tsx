import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useAppDispatch } from "@/Store/StoreConfigs";
import { changeTheme } from "@/Store/Slices/Theme/ThemeSlice";
import MoonIcon from "@/Components/Icons/MoonIcon/MoonIcon";
import SunIcon from "@/Components/Icons/SunIcon/SunIcon";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setMounted(true);
 
  }, []);
  useEffect(() => {
 
    setTheme(theme === "dark" ? "light" : "dark");
  }, [mounted]);
  useEffect(() => {
 
    dispatch(changeTheme({ theme }));
  }, [theme]);

 
  if (!mounted) return null;

  const handleThemeToggle = () => {

    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Render the appropriate icon based on the current theme */}
      {theme === "dark" ? (
        <button onClick={handleThemeToggle}>
          <SunIcon />
        </button>
      ) : (
        <button onClick={handleThemeToggle}>
          <MoonIcon />
        </button>
      )}
    </>
  );
};
