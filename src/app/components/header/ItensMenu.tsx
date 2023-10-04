import Link from "next/link";

export function ItensMenu() {
    return (
        <ul className="flex flex-col sm:flex-row items-center justify-center sm:space-x-10 font-bold">
            <li>
                <Link href="/">Lançamentos</Link>
            </li>
            <li>
                <Link href="/about">Masculino</Link>
            </li>
            <li>
                <Link href="/contact">Feminino</Link>
            </li>
            <li>
                <Link href="/contact">Ofertas</Link>
            </li>
            <li>
                <Link href="/contact">SNKRS</Link>
            </li>
        </ul>
    );
}