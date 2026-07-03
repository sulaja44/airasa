"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "Fitur", "Solusi", "Harga", "Tentang", "Kontak"];

  const tools = [
    { icon: "🎯", name: "AI Caption", desc: "Buat caption menarik untuk semua platform" },
    { icon: "📝", name: "Product Description", desc: "Deskripsi produk yang menjual" },
    { icon: "🎁", name: "Promo Generator", desc: "Buat promo, diskon, penawaran menarik" },
    { icon: "📅", name: "Content Planner", desc: "Rencana konten 30/60/90 hari terstruktur" },
    { icon: "💬", name: "WhatsApp Generator", desc: "Pesan WhatsApp lebih efektif & profesional" },
    { icon: "🏷️", name: "Product Naming", desc: "Nama produk / brand yang unik & kuat" },
    { icon: "🧮", name: "Pricing Calculator", desc: "Hitung harga, margin, keuntungan dengan mudah" },
    { icon: "👤", name: "Bio Generator", desc: "Bio media sosial & marketplace otomatis" },
    { icon: "↩️", name: "Customer Reply", desc: "Balasan cepat untuk berbagai situasi" },
    { icon: "🧠", name: "AI Business Consultant", desc: "Analisis bisnis & strategi dari AI consultant" },
  ];

  const steps = [
    { n: 1, title: "Buat Profil Bisnis", desc: "Lengkapi informasi bisnis Anda dalam hitungan menit." },
    { n: 2, title: "Pilih AI Tools", desc: "Pilih tools yang sesuai dengan kebutuhan bisnis Anda." },
    { n: 3, title: "Generate", desc: "AI akan menghasilkan konten, ide, atau strategi terbaik." },
    { n: 4, title: "Tingkatkan Penjualan", desc: "Gunakan hasil AI untuk promosi, menarik pelanggan, dan closing." },
  ];

  const badges = [
    "UMKM Indonesia",
    "Startup ID",
    "Creator Indonesia",
    "Retail Store",
    "Restaurant Indonesia",
    "Coffee Shop ID",
    "Fashion Brand",
  ];

  const faqs = [
    "Apakah AIRASA gratis?",
    "Apakah bisa digunakan di HP?",
    "Apakah hasil AI bisa diedit?",
    "Apakah cocok untuk semua jenis usaha?",
  ];

  return (
    <main className="min-h-screen bg-white text-airasa-ink">
      {/* Navbar */}
      <nav className="relative flex items-center justify-between px-6 md:px-12 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-2xl">💧</span>
          <span className="font-bold text-lg tracking-tight text-airasa-teal">AIRASA</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navItems.map((item) => (
            <a key={item} href="#" className="hover:text-airasa-teal">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-airasa-teal border border-gray-200 rounded-full hover:bg-gray-50">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-airasa-teal rounded-full hover:bg-airasa-tealDark">
            Mulai Gratis
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-airasa-teal"
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 flex flex-col gap-4 px-6 py-6 md:hidden z-50">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-gray-600">
                {item}
              </a>
            ))}
            <button className="w-full py-2 border border-gray-200 rounded-full text-sm font-medium text-airasa-teal">
              Login
            </button>
            <button className="w-full py-2 bg-airasa-teal text-white rounded-full text-sm font-medium">
              Mulai Gratis
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div>
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-airasa-teal bg-[#EAF3F1] rounded-full mb-6">
            AI BUSINESS ECOSYSTEM UNTUK UMKM
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
            Mengalirkan Peluang,
            <br />
            <span className="bg-gradient-to-r from-airasa-gold to-airasa-teal bg-clip-text text-transparent">
              Menghadirkan Solusi.
            </span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md">
            AIRASA adalah ekosistem AI terlengkap untuk membantu Anda membuat konten,
            strategi pemasaran, analisis bisnis, dan berbagai tools bisnis dalam satu
            platform.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-6 py-3 bg-airasa-teal text-white font-medium rounded-full hover:bg-airasa-tealDark transition">
              Mulai Gratis →
            </button>
            <button className="px-6 py-3 border border-gray-200 text-airasa-teal font-medium rounded-full hover:bg-gray-50 transition">
              ▶ Lihat Demo
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Bergabung dengan 10.000+ pebisnis yang sudah merasakan manfaat AIRASA
          </p>
        </div>

        <div className="bg-airasa-ink rounded-2xl p-4 shadow-2xl">
          <div className="bg-white rounded-xl p-4 min-h-[320px]">
            <p className="text-sm font-semibold mb-4">Dashboard</p>
            <div className="grid grid-cols-2 gap-3">
              {["AI Caption Instan", "Product Description", "Promo Generator", "Content Planner"].map(
                (t) => (
                  <div key={t} className="border border-gray-100 rounded-lg p-3 text-xs font-medium text-gray-700">
                    {t}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-10 border-y border-gray-100">
        <p className="text-center text-sm text-gray-500 mb-6">Dipercaya oleh berbagai jenis bisnis</p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 px-6 text-xs font-medium text-gray-400">
          {badges.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="flex justify-center">
          <span className="text-9xl">💧</span>
        </div>
        <div>
          <span className="text-airasa-gold text-sm font-semibold">FILOSOFI AIRASA</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Air Mengalir.
            <br />
            Rasa Menghubungkan.
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            AIRASA hadir dengan filosofi bahwa setiap bisnis memiliki aset dan peluang
            yang dapat berkembang jika didukung oleh teknologi yang tepat.
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-xl mb-2">💧</p>
              <p className="font-semibold text-sm mb-1">Air</p>
              <p className="text-xs text-gray-500">
                Melambangkan kehidupan, adaptasi, dan solusi yang selalu mengalir.
              </p>
            </div>
            <div>
              <p className="text-xl mb-2">❤️</p>
              <p className="font-semibold text-sm mb-1">Rasa</p>
              <p className="text-xs text-gray-500">
                Melambangkan empati, pengalaman, dan nilai yang dirasakan.
              </p>
            </div>
            <div>
              <p className="text-xl mb-2">🤖</p>
              <p className="font-semibold text-sm mb-1">AI</p>
              <p className="text-xs text-gray-500">
                Menjadi jembatan yang menghubungkan air dan rasa menjadi peluang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          AI Tools untuk Semua Kebutuhan Bisnis
        </h2>
        <p className="text-center text-gray-500 mb-10">
          10+ AI Tools yang siap membantu bisnis Anda berkembang lebih cepat
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((t) => (
            <div key={t.name} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition">
              <p className="text-2xl mb-3">{t.icon}</p>
              <p className="font-semibold text-sm mb-1">{t.name}</p>
              <p className="text-xs text-gray-500">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-3 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50">
            Lihat Semua Tools →
          </button>
        </div>
      </section>

      {/* Cara Kerja + Dashboard Preview */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Cara Kerja AIRASA</h2>
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-airasa-teal text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  {s.n}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-xs text-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Dashboard yang Lengkap & Mudah Digunakan
          </h2>
          <p className="text-gray-500 text-sm mb-6">Semua yang Anda butuhkan dalam satu dashboard</p>
          <div className="bg-airasa-ink rounded-2xl p-4">
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm font-semibold mb-4">Selamat datang, Barokah 👋</p>
              <div className="grid grid-cols-4 gap-3 mb-4 text-xs">
                <div className="border border-gray-100 rounded-lg p-2">
                  <p className="text-gray-400">Total Generate</p>
                  <p className="font-bold text-airasa-teal">1,248</p>
                </div>
                <div className="border border-gray-100 rounded-lg p-2">
                  <p className="text-gray-400">Tools Digunakan</p>
                  <p className="font-bold text-airasa-teal">10+</p>
                </div>
                <div className="border border-gray-100 rounded-lg p-2">
                  <p className="text-gray-400">Waktu Hemat</p>
                  <p className="font-bold text-airasa-teal">230 Jam</p>
                </div>
                <div className="border border-gray-100 rounded-lg p-2">
                  <p className="text-gray-400">Ide Dibuat</p>
                  <p className="font-bold text-airasa-teal">3,456</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 text-[10px]">
                {["Buat Caption", "Buat Deskripsi", "Buat Promo", "+ Lihat Semua"].map((b) => (
                  <div key={b} className="border border-gray-100 rounded-lg p-2 text-center">
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gradient-to-r from-airasa-teal to-airasa-gold px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          {[
            ["100+", "Template Siap Pakai"],
            ["10+", "AI Tools Canggih"],
            ["24/7", "AI Assistant"],
            ["Unlimited", "Ide & Kreativitas"],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="text-xl font-bold">{num}</p>
              <p className="text-xs opacity-80">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Pilih Paket yang Sesuai</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-100 rounded-2xl p-6">
            <p className="text-xs font-semibold text-gray-400 mb-2">FREE</p>
            <p className="text-3xl font-bold mb-4">
              Rp0<span className="text-sm font-normal">/bulan</span>
            </p>
            <ul className="text-xs text-gray-600 space-y-2 mb-6">
              <li>✓ 20 Generate / bulan</li>
              <li>✓ Semua AI Tools</li>
              <li>✓ Akses Template Basic</li>
              <li>✓ Riwayat 7 hari</li>
            </ul>
            <button className="w-full py-2 border border-gray-200 rounded-full text-sm font-medium">
              Mulai Gratis
            </button>
          </div>

          <div className="border-2 border-airasa-gold rounded-2xl p-6 relative">
            <span className="absolute -top-3 left-6 bg-airasa-gold text-white text-[10px] px-3 py-1 rounded-full">
              Popular
            </span>
            <p className="text-xs font-semibold text-gray-400 mb-2">PRO</p>
            <p className="text-3xl font-bold mb-4">
              Rp149.000<span className="text-sm font-normal">/bulan</span>
            </p>
            <ul className="text-xs text-gray-600 space-y-2 mb-6">
              <li>✓ Unlimited Generate</li>
              <li>✓ Semua AI Tools</li>
              <li>✓ Template Premium</li>
              <li>✓ AI Business Consultant</li>
              <li>✓ Riwayat Unlimited</li>
              <li>✓ Priority AI Processing</li>
            </ul>
            <button className="w-full py-2 bg-airasa-gold text-white rounded-full text-sm font-medium">
              Upgrade ke PRO
            </button>
          </div>

          <div className="border border-gray-100 rounded-2xl p-6">
            <p className="text-xs font-semibold text-gray-400 mb-2">TEAM</p>
            <p className="text-3xl font-bold mb-4">
              Rp399.000<span className="text-sm font-normal">/bulan</span>
            </p>
            <ul className="text-xs text-gray-600 space-y-2 mb-6">
              <li>✓ Semua Fitur PRO</li>
              <li>✓ Multi User (5 Akun)</li>
              <li>✓ Workspace Team</li>
              <li>✓ Analytics & Report</li>
              <li>✓ API Access</li>
            </ul>
            <button className="w-full py-2 bg-airasa-teal text-white rounded-full text-sm font-medium">
              Pilih TEAM
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial + FAQ */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-6">Apa Kata Pengguna AIRASA?</h2>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="text-airasa-gold text-sm mb-3">★★★★★</p>
            <p className="text-sm text-gray-600 mb-4">
              &quot;AIRASA membuat saya tidak lagi bingung membuat promosi setiap hari.
              Kontennya menarik dan hasilnya naik!&quot;
            </p>
            <p className="text-sm font-semibold">Siti Nurhaliza</p>
            <p className="text-xs text-gray-400">Owner Fashion</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6">Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-3">
            {faqs.map((q) => (
              <div
                key={q}
                className="border border-gray-100 rounded-lg px-4 py-3 flex justify-between items-center text-sm"
              >
                {q} <span className="text-gray-400">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-6 md:mx-12 mb-16 rounded-2xl bg-gradient-to-r from-airasa-teal to-airasa-gold px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl md:mx-auto">
        <div className="text-white text-center md:text-left">
          <h2 className="text-2xl font-bold mb-1">Siap Mengembangkan Bisnis Anda?</h2>
          <p className="text-sm opacity-80">
            Bergabunglah bersama AIRASA dan rasakan bagaimana AI membantu bisnis Anda
            berkembang lebih cepat dan lebih cerdas.
          </p>
        </div>
        <button className="px-6 py-3 bg-white text-airasa-teal rounded-full font-medium whitespace-nowrap">
          Mulai Gratis Sekarang →
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-airasa-ink text-gray-300 px-6 md:px-12 py-12 text-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
          <div>
            <p className="text-white font-bold mb-2">💧 AIRASA</p>
            <p className="text-xs text-gray-400">Mengungkap Aset dan Peluang Nusantara</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3 text-xs">Produk</p>
            <p className="text-xs mb-2">AI Tools</p>
            <p className="text-xs mb-2">Harga</p>
            <p className="text-xs mb-2">Template</p>
            <p className="text-xs">Fitur</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3 text-xs">Perusahaan</p>
            <p className="text-xs mb-2">Tentang Kami</p>
            <p className="text-xs mb-2">Blog</p>
            <p className="text-xs mb-2">Karir</p>
            <p className="text-xs">Kontak</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3 text-xs">Bantuan</p>
            <p className="text-xs mb-2">Pusat Bantuan</p>
            <p className="text-xs mb-2">FAQ</p>
            <p className="text-xs mb-2">Panduan</p>
            <p className="text-xs">Kebijakan Privasi</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3 text-xs">Kontak</p>
            <p className="text-xs mb-2">halo@airasa.id</p>
            <p className="text-xs mb-2">+62 812-3456-7890</p>
            <p className="text-xs">Indonesia</p>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-10">© 2024 AIRASA. All rights reserved.</p>
      </footer>
    </main>
  );
}
