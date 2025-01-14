import { Page } from "../components/atomic/Page.tsx";
import { Header } from "../components/atomic/Header.tsx";
import { ProfileIcon } from "../components/ProfileIcon.tsx";
import { Signal } from "@preact/signals";

interface StocksPageParams {
  activeTab: Signal<string>;
}

export function StocksPage({ activeTab}: StocksPageParams) {
  return(
    <Page navid="stocks" activeTab={activeTab}>
      <Header>
        <div class="body-bold color-primary w-full text-3xl">Investments</div>
        <ProfileIcon />
      </Header>
    </Page>
  );
}