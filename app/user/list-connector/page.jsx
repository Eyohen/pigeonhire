import ListCommunityDetails from "@/app/components/listCommunityDetails";
import ListConnectorDetails from "@/app/components/listConnectorDetails";

export default function ListCommunity (params) {
    return (
        <div>
        <div className="text-lg font-medium mb-6">
        List a Community
            </div>
       <ListConnectorDetails />
        </div>
    )
}