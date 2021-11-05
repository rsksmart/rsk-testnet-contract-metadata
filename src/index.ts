import contractMap from './contract-map.json'

export interface ITokenMetadata {
  [address: string]: {
    name: string
    logo?: string
    erc20?: boolean
    symbol: string
    decimals: number
  }
}

export type Addresses = keyof ITokenMetadata
export type Metadata = ITokenMetadata[Addresses]

const metadata: ITokenMetadata = contractMap

export default metadata
