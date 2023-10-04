import Image from 'next/image';
import nike from '../../../../assets/nike.svg';

export function Logo() {
    return (
        <div className="flex items-center justify-center">
            <Image src={nike.src} alt="Logo Nike" width={100} height={100} />
        </div>
    )
}