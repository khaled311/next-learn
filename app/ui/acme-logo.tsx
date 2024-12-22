import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Lusitana_font } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${Lusitana_font.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
