import Layout from "@/layout/Layout";
import { MintMetadata } from "@/types/mintMetadata";
import { getNFTContract } from "@/util/getContracts";
import { useAddress, useMintNFT } from "@thirdweb-dev/react";
import { useState } from "react";
import * as XLSX from 'xlsx';

export default function Wallet() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const { nft_contract } = getNFTContract();

    const { mutate: mintNFT, isLoading, error } = useMintNFT(nft_contract);
    const address = useAddress();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDescription(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    };

    const handleExcelFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const file = event.target.files?.[0];
    
            if (!file) {
                return;
            }
    
            const workbook = await readExcelFile(file);
    
            if (!workbook) {
                console.error("Error reading Excel file");
                return;
            }
    
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
    
            const data = XLSX.utils.sheet_to_json(sheet);
    
            if (data && data.length > 0) {
                const promises = data.map(async (row: any) => {
                    const metadata: MintMetadata = {
                        metadata: {
                            name: row.name,
                            description: row.description,
                            image: row.image,
                        },
                        to: address ?? "",
                        supply: 1,
                    };
    
                    await mintNFT(metadata);
                });
    
                await Promise.all(promises);
            }
        } catch (error) {
            console.error("Error processing Excel file", error);
        }
    };
    
    const readExcelFile = (file: File): Promise<any> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = (event) => {
                const data = new Uint8Array(event.target?.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: 'array' });
                resolve(workbook);
            };
    
            reader.onerror = (error) => {
                reject(error);
            };
    
            reader.readAsArrayBuffer(file);
        });
    };
    

    const handleSubmit = async (event: React.FormEvent) => {
        try {
            event.preventDefault();

            if (name === "" || description === "" || image === "") {
                return;
            }

            const metadata: MintMetadata = {
                metadata: {
                    name,
                    description,
                    image,
                },
                to: address ?? "",
                supply: 1,
            };

            mintNFT(metadata);
        } catch (e) {
            console.log("Error Minting", e);
        }
    };
    return (
        <Layout>
            <div>
                <h1 className="text-6xl font-semibold my-4 text-center">
                    Mint new NFTs
                </h1>

                <div className="relative bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-2xl">
                    <h1 className="text-2xl font-semibold my-4 text-center">
                        Upload your file (.xls or .xlsx) to mint NFTs in bulk
                    </h1>
                    <input
                        type="file"
                        id="excelFile"
                        accept=".xls, .xlsx"
                        onChange={handleExcelFileChange}
                    />

                    {isLoading && (
                        <div className="text-center mt-4">
                            Minting in progress ...
                        </div>
                    )}
                    {(error as unknown as boolean) && (
                        <div className="text-center mt-4">
                            Minting in progress ...
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
