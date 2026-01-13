import { ThemeSwitcher } from "@/components/theme-toggle";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <Button>

      </Button>
      <Avatar>

      </Avatar>
      <div className="bg-red-500 dark:bg-green-500">
        Hello
      </div>
    </div>
  );
}
