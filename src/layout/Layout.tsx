import React, { ReactNode } from "react";
import styles from "@/styles/Home.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";
import CardLink from "@/components/CardLink";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main className={styles.main}>
            <ConnectWallet theme={"dark"} modalSize={"wide"} />
            <div className={styles.grid}>
                <CardLink
                    href="/wallet"
                    title="Your NFT's"
                    description="See NFTs you own"
                />
                <CardLink
                    href="/mint"
                    title="Mint"
                    description="Mint a new NFT"
                />
                <CardLink
                    href="/mint-bulk"
                    title="Mint Bulk"
                    description="Mint new NFTs"
                />
            </div>

            <div className={styles.center}>
                <div>{children}</div>
            </div>
        </main>
    );
};

export default Layout;