# Portfolio Single Page Application (SPA) Setup

## Overview
Portfolio ini telah diubah dari multi-page menjadi single page application dengan scrollable sections yang smooth dan responsive.

## Fitur Utama
1. **Single Page Layout**: Semua konten digabungkan dalam satu halaman dengan section-section yang dapat di-scroll
2. **Smooth Scrolling**: Navigasi menggunakan smooth scroll ke section tertentu
3. **Active Section Detection**: Menu secara otomatis mendeteksi section mana yang sedang aktif
4. **Scroll Progress Indicator**: Bar progress di atas halaman menunjukkan seberapa jauh user telah scroll
5. **Scroll to Top Button**: Tombol floating untuk kembali ke atas
6. **Responsive Design**: Tetap responsif di semua device

## Struktur Section
1. **Home** - Landing section dengan intro
2. **About** - Informasi tentang diri
3. **Skills** - Keahlian dan tech stack
4. **Experiences** - Pengalaman kerja dan organisasi
5. **Projects** - Portfolio project
6. **Blogs** - Blog posts (Coming Soon)
7. **Contact** - Informasi kontak

## Komponen Baru
- `SinglePagePortfolio.tsx` - Main component yang menggabungkan semua section
- `useSmoothScroll.hook.ts` - Hook untuk smooth scrolling dan section detection
- `ScrollIndicator.tsx` - Progress bar indicator
- `ScrollToTop.tsx` - Floating scroll to top button

## Komponen yang Dimodifikasi
- `page.tsx` - Menggunakan SinglePagePortfolio
- `Menu.tsx` - Diubah untuk scroll navigation bukan page navigation
- `Home.tsx` - Link navigation menggunakan smooth scroll
- `menu.json` & `pages.json` - Menggunakan anchor links (#section)
- `Content.d.ts` - Fixed type definition untuk menghindari React key warning

## Bug Fixes
- **React Key Warning**: Mengatasi error "React keys must be passed directly to JSX without using spread" dengan mengubah `ProjectCardProps` interface untuk meng-exclude prop `key` dari `HTMLAttributes`

## Cara Menambah Section Baru
1. Tambahkan section baru di `SinglePagePortfolio.tsx`
2. Berikan id yang unik untuk section
3. Tambahkan entry baru di `menu.json` dan `pages.json`
4. Update array sections di `useSmoothScroll.hook.ts`

## Performance
- Intersection Observer digunakan untuk efficient section detection
- Smooth scrolling menggunakan native browser API
- Lazy loading components tetap berfungsi optimal

## Browser Support
- Modern browsers yang support CSS scroll-behavior: smooth
- Intersection Observer API
- ES6+ features
