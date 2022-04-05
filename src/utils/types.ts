import { AuthState } from "@app/store/reducers/auth";
import { UiState } from "@app/store/reducers/ui";
import { UserState } from "@app/store/reducers/user";

export interface ItemRole {
    name: string;
    id: string;
}
export interface DataListUserProp {
    id: string;
    name: string;
    email: string;
    roles: ItemRole[];
    createdAt: string;
    isActive: boolean;
}
export interface DataListPlayerProp {
    id: string;
    address: string;
    name: string;
    regionId: number;
    highestLevel: number;
    createdAt: string;
    updatedAt: string;
    banned: boolean;
}

export interface DataListItemGoldProp {
    key: number | string;
}
export interface DataListBugProp {
    id: string;
    type: string;
    brief: string;
    address: string;
    nameInGame: string;
    datePublished: string;
    status: boolean;
}
export interface DataHeaderInfo {
    name: string;
    email: string;
    role: string;
    dateActived: string;
    percent: string;
    totalGold: string;
    status: boolean;
}
export interface DataBasicInfo {
    timeActive: string;
    latestInGame: string;
    statusActive: boolean;
    note: string;
    date: string;
}
export interface DataHeaderInfo1 {
    name: string;
    address: string;
    nation: string;
    role: string;
}
export interface DataNotificationInGame {
    id: string;
    title: string;
    type: string;
    to: string;
    reporter: string;
    note: string;
    createdAt: string;
    status: boolean;
}
export interface ListDataNotification {
    id: string;
    type: string;
    description: string;
    note: string;
    createdAt: string;
}

export interface DataUser {
    email: string;
    createdAt: string;
    fullName: string;
    isActive: string;
    phoneNumber: string;
    roles: [];
    note: string;
}
export interface DataPlayer {
    name: string;
    address: string;
    nation: string;
    role: string;
    totalOnlineHours: number;
    lastUpdate: string;
    banned: boolean;
    reason: string;
    updatedAt: string;
    note: string;
    createdAt: string;
    highestLevel: number;
    totalStars: number;
    totalCoins: number;
    tokenEarned: number;
    lastPlayed: string;
}
export interface DataPlayerStoryMode {
    levelInfoId: number;
    tokensStar: number;
    totalPlayed: number;
    tokensReward: number;
    coinsReward: number;
    lastPlayedAt: string;
    autoRaid: AutoRaidProps[];
}

export interface AutoRaidProps {
    cardTokenId: number;
    coinsReward: number;
    tokensReward: number;
}

export interface DataRolesUser {
    note: string;
    fullAccess: boolean;
    permissions: [];
    id: string;
    name: string;
    createdBy: string;
    createdAt: string;
}

export interface PermissionI {
    feature: string;
    id: string;
}
export interface DataRoleUser {
    note: string;
    fullAccess: boolean;
    permissions: PermissionI[];
    name: string;
    createdBy: string;
    id: string;
}

export interface DataNftPlayer {
    isRaiding: boolean;
    ownerAddress: string;
    tokenId: number | string;
    dataDetailNft: DataDetailNft[];
}

export interface DataDetailNft {
    evolveLevel: number;
    specialSkillLevel: number;
    rankInfoId: number;
    characterName: string;
    imgHero: string;
    characterId: number;
    level: number;
    attack: number;
    energy: number;
    hp: number;
    rankName: string;
    speed: number;
    battlePower: number;
}

export interface DataItemInGame {
    imgHero: string;
    characterName: string;
    level: number;
    number: number;
}

export interface DataOrderHistory {
    nftToken: string;
    event: string;
    tokenId: number;
    quantities: number;
    baseFeePercent: number;
    createdTime: string;
    expiredTime: string;
    targetPrice: number;
    priorityFee: number;
    transactionHash: string;
    createdAt: string;
    updatedAt: string;
    seller: string;
    dataDetailOrdderHistory: DataDetailOrderHistory[];
}

export interface DataDetailOrderHistory {
    evolveLevel: number;
    specialSkillLevel: number;
    characterName: string;
    characterId: number;
    rankInfoId: number;
    rankName: string;
    level: number;
    battlePower: number;
    attack: number;
    hp: number;
    speed: number;
    energy: number;
    imgHero: string;
}

export interface DataClaimHistory {
    address: string;
    transactionHash: string;
    totalToken: number;
    event: string;
    assetType: string;
    isDone: boolean;
    createdAt: string;
    updatedAt: string;
}
export interface OptionRole {
    name: string;
    value: string;
}

export interface ApplicationRootState {
    auth: AuthState;
    ui: UiState;
    user: UserState;
}

export interface DataProfile {
    firstLogin: boolean;
    note: string;
    phoneNumber: string;
    isActive: boolean;
    verified: boolean;
    email: string;
    fullName: string;
    createdAt: string;
    updatedAt: string;
    id: string;
}
export interface IEditUser {
    fullName: string;
    roles: string[];
    phoneNumber: string;
    note?: string;
}
export interface UserI {
    fullName: string;
    email: string;
    password: string;
    roles: string[];
    phoneNumber: string;
    note: string;
}
export interface IPermissionRoleUser {
    name: string;
    permissions: string[];
    fullAccess: boolean;
    note: string;
}

export interface ITypeAction {
    key: string;
    name: string;
    id: string;
}
export interface INotification {
    readed: boolean;
    blockNumber: string;
    eventType: string;
    address: string;
    timeUTC: string;
    data: string;
    platform: string;
    createdAt: string;
    updatedAt: string;
    type: ITypeAction;
    id: string;
}
