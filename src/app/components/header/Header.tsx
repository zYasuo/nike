import { ItensMenu } from "./ItensMenu"
import { Logo } from "./Logo"
import { Icon } from "./iconMenu"
import { InputSearch } from "./InputSearch"

export function Header() {
    return (
        <header className="flex items-center justify-around bg-slate-600">
            <Logo />
            <ItensMenu />
            <InputSearch />
            <Icon />
        </header>
    )
}