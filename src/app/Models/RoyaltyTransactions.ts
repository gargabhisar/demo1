import { RoyaltyPayments } from "./RoyaltyPayments";

export interface RoyaltyTransactions {
    totalRoyalty: number;
    totalRoyaltyPaid: number;
    pendingRoyalty: number;
    royaltyPayments: RoyaltyPayments[];
}