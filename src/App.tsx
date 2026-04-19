/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CityLandingPage from "./pages/CityLandingPage";
import MetallicCityLandingPage from "./pages/MetallicCityLandingPage";
import FlakeCityLandingPage from "./pages/FlakeCityLandingPage";
import CoatingCityLandingPage from "./pages/CoatingCityLandingPage";
import ServicePage from "./pages/ServicePage";
import TermsPage from "./pages/TermsPage";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import ServicesPage from "./pages/ServicesPage";
import ProcessPage from "./pages/ProcessPage";
import PortfolioPage from "./pages/PortfolioPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import QuotePage from "./pages/QuotePage";
import PrivacyPage from "./pages/PrivacyPage";

import KeywordLandingPage from "./pages/KeywordLandingPage";

const keywordSlugs = [
  "epoxy-vloer-coating", "epoxy-vloer", "epoxy-gietvloer", "epoxy-coating-garage", 
  "garagevloer-epoxy-coating", "epoxy-vloer-garage", "epoxy-coating-beton", 
  "betoncoating-epoxy", "betonvloer-coaten", "epoxy-coating-badkamer", 
  "badkamervloer-epoxy", "waterdichte-vloer-badkamer", "epoxy-douchevloer", 
  "epoxy-coating-buiten", "buitenvloer-epoxy", "terras-epoxy-coating", 
  "oprit-epoxy", "uv-bestendige-coating", "industriële-epoxy-coating", 
  "industriële-vloercoating", "magazijn-vloer-epoxy", "werkplaats-vloer-coating", 
  "esd-vloer-epoxy", "epoxy-coating-prijs", "epoxy-coating-kosten", 
  "epoxy-vloer-offerte",
  "metallic-epoxy-vloer", "metallic-epoxyvloer", "metallic-vloer-epoxy", 
  "glanzende-epoxy-vloer", "metallic-gietvloer", "gietvloer-metallic", "metallic-gietvloer-prijs", 
  "metallic-epoxy-prijs", "metallic-epoxy-vloer-prijs-per-m2", "metallic-epoxy-kosten", 
  "metallic-gietvloer-prijs-per-m2", "metallic-epoxy-offerte", "metallic-epoxy-pigment", 
  "metallic-pigmentpoeder-epoxy", "mica-pigment-epoxy", "epoxy-metallic-poeder", 
  "metallic-kleurpigment-epoxy", "metallic-epoxy-vloer-leggen", "metallic-epoxy-woonkamer", 
  "metallic-vloer-woonkamer", "metallic-epoxy-interieur", "metallic-gietvloer-woning", 
  "metallic-epoxy-kleuren", "metallic-epoxy-goud", "metallic-epoxy-zilver", 
  "metallic-epoxy-koper", "metallic-epoxy-brons", "metallic-epoxy-grijs", 
  "metallic-epoxy-antraciet", "metallic-epoxy-marmerlook", "epoxy-marmereffect-vloer", 
  "marmer-vloer-epoxy", "epoxy-vloer-marmer-uitstraling", "metallic-epoxy-garage", 
  "metallic-garagevloer-epoxy", "metallic-epoxy-antislip-garage", "metallic-epoxy-showroom", 
  "metallic-vloer-winkel", "metallic-epoxy-kantoor", "metallic-vloer-horeca", 
  "metallic-epoxy-hotel", "metallic-epoxy-vloer-onderhoud", "metallic-epoxy-vloer-schoonmaken", 
  "metallic-epoxy-krasbestendig", "metallic-epoxy-vloer-voordelen", "metallic-epoxy-vloer-uitharden", 
  "pu-metallic-gietvloer", "polyurethaan-metallic-vloer", "metallic-epoxy-vloer-woonkamer-kosten", 
  "metallic-epoxy-vloer-badkamer", "metallic-epoxy-met-glitter", "metallic-epoxy-dieptewerking-effect", 
  "metallic-epoxy-lichtspel-vloer", "metallic-epoxy-vloer-industrieel", "metallic-epoxy-effect-uitleg",
  "flake-epoxy-vloer", "epoxy-vloer-flakes", "flakes-epoxy-vloer", "flakesvloer", "flakes-vloer", "flake-vloer-epoxy", "epoxy-flakesvloer", "chipsvloer", "chips-vloer-epoxy", "epoxy-chipsvloer", "chipsvloer-prijs", "vlokkenvloer", "epoxy-vlokken", "vloer-met-vlokken", "epoxy-met-vlokken", "kleurvlokken-epoxy", "kleurchips-epoxy", "kleurvlokken-gietvloer", "vinyl-flakes-epoxy", "flake-epoxy-garage", "chipsvloer-garage", "vlokkenvloer-garage", "epoxy-flakes-garagevloer", "flake-epoxy-prijs", "flakesvloer-prijs-per-m2", "chipsvloer-kosten", "vlokkenvloer-prijs", "flake-epoxy-kleuren", "epoxy-vlokken-kleuren", "kleurvlokken-mixen", "gietvloer-met-vlokken", "gietvloer-flakes", "gietvloer-kleurvlokken", "gietvloer-vlokken-instrooien", "flake-epoxy-showroom", "chipsvloer-winkel", "flakesvloer-kantoor", "flakes-vloer-horeca", "epoxy-vloer-flakes-antislip", "flake-epoxy-full-broadcast", "kleurvlokken-goud-zilver-epoxy", "vinyl-flakes-epoxy-vloer", "epoxy-vloer-met-vlokken-camouflage", "gietvloer-met-kleurvlokken-kosten", "epoxy-vlokken-grijs-beige", "flakesvloer-onderhoud", "chipsvloer-schoonmaken", "epoxy-vlokken-bandsporen-garage", "flake-epoxy-woonkamer", "flake-epoxy-entree", "flake-epoxy-magazijn", "flake-epoxy-terrazzo-look", "epoxy-vlokken-terrazzolook", "flake-epoxy-sealer-topcoat"
];

function CityPageSwitcher() {
  const { slug } = useParams();
  
  if (!slug) return <HomePage />;

  if (keywordSlugs.includes(slug)) {
    return <KeywordLandingPage />;
  }

  if (slug === "epoxy-coating" || slug === "metallic-epoxy" || slug === "flake-epoxy") {
    return <ServicePage />;
  }

  if (slug.startsWith("metallic-epoxy-vloer-")) {
    return <MetallicCityLandingPage />;
  }
  
  if (slug.startsWith("flake-epoxy-vloer-")) {
    return <FlakeCityLandingPage />;
  }

  if (slug.startsWith("epoxy-coating-vloer-")) {
    return <CoatingCityLandingPage />;
  }
  
  if (slug.startsWith("epoxy-vloer-")) {
    return <CityLandingPage />;
  }

  return <HomePage />;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diensten" element={<ServicesPage />} />
        <Route path="/werkwijze" element={<ProcessPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/offerte" element={<QuotePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/algemene-voorwaarden" element={<TermsPage />} />
        <Route path="/:slug" element={<CityPageSwitcher />} />
      </Routes>
    </Router>
  );
}
