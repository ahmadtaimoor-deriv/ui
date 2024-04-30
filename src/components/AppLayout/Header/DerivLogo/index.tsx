import {
    BrandDerivLogoCoralIcon,
    BrandDerivWordmarkCoralIcon,
} from "@deriv/quill-icons/Logo";
import clsx from "clsx";
import { TVariant } from "../../LayoutTypes";

import "./DerivLogo.scss";

type TDerivLogo = {
    variant?: TVariant;
    className?: HTMLAnchorElement["className"];
};

const logo = {
    default: {
        icon: BrandDerivWordmarkCoralIcon,
        className: "deriv-logo__default",
    },
    wallets: {
        icon: BrandDerivLogoCoralIcon,
        className: "deriv-logo__wallets",
    },
};

export const DerivLogo = ({ variant = "default", className }: TDerivLogo) => {
    const LogoIcon = logo[variant].icon;

    return (
        <a
            className={clsx(logo[variant].className, className)}
            href="https://deriv.com/"
            target="_blank"
        >
            <LogoIcon />
        </a>
    );
};

DerivLogo.displayName = "DerivLogo";
