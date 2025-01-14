import { Page } from "../components/atomic/Page.tsx";
import { Header } from "../components/atomic/Header.tsx";
import { ProfileIcon } from "../components/ProfileIcon.tsx";
import { Signal } from "@preact/signals";

interface RustPageParams {
  activeTab: Signal<string>;
}

export function RustPage({ activeTab}: RustPageParams) {
  return(
    <Page navid="rust" activeTab={activeTab}>
      <Header>
        <div class="body-bold color-primary w-full text-3xl">Rust Example</div>
        <ProfileIcon />
      </Header>
    </Page>
  );
}