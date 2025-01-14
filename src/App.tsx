import { useSignal } from "@preact/signals";
import { DiscoverPage } from "./pages/DiscoverPage";
import { RustPage } from "./pages/RustPage";
import { StocksPage } from "./pages/StocksPage";
import { NavTabBar } from "./components/atomic/NavTabBar";
import { NavTabOption } from "./components/atomic/NavTabOption";
import './app.css'

export default function App() {
  const selectedTab = useSignal("discover");

  return(
    <>
      <DiscoverPage activeTab={selectedTab} />
      <RustPage activeTab={selectedTab} />
      <StocksPage activeTab={selectedTab} />

      <NavTabBar>
        <NavTabOption navid="discover" activeTab={selectedTab}>explore</NavTabOption>
        <NavTabOption navid="rust" activeTab={selectedTab}>terminal</NavTabOption>
        <NavTabOption navid="stocks" activeTab={selectedTab}>trending_up</NavTabOption>
      </NavTabBar>
    </>
  );
}