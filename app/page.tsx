export default function HomePage() {
return (
<>
{/* Шапка */}
<header className="bg-white py-3">
<p className="text-2xl font-bold">BOXPACK</p>
</header>
{/* Первый экран */}
<div className="rounded-xl bg-white p-5 shadow-sm">
<h2 className="text-xl font-bold">Заголовок</h2>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-[10px] bg-[#f0f0f0] p-5">
<p className="text-xs font-bold">ШАГ 1</p>
<h3 className="mt-2 text-xs">Оставляете заявку</h3>
</div>
<div className="rounded-[10px] bg-[#f0f0f0] p-5">
<p className="text-xs font-bold">ШАГ 2</p>
<p className="text-[#1a2a52] text-[14px] mt-[18px]">Получите расчет</p>
<div className="bg-[#f8f8f8] rounded-[10px] w-[266px]" />
</div>
{/* ...остальные шаги по аналогии */}
</div>
</div>
<section className="bg-[#1a2a52] py-16 text-white">
<h1 className="text-5xl font-bold">Фулфилмент</h1>
</section>
</>
);
}