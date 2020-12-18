import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              کد این این سایت{" "}
              <a
                href={"https://github.com/aminsource/mana.git"}
                className="underline hover:text-success duration-200 transition-colors"
              >
                برروی گیت هاب قابل دسترس است
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;