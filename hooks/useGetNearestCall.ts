import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

export const useGetNearestCall = () => {
  const { user } = useUser();

  const client = useStreamVideoClient();

  const [call, setCall] = useState<Call[]>();

  useEffect(() => {
    const loadNearestCall = async () => {
      if (!client || !user?.id) return;

      try {
        const { calls } = await client.queryCalls({
          sort: [{ field: "starts_at", direction: 1 }],
          filter_conditions: {
            starts_at: { $gt: new Date().toISOString() },
            $or: [
              { created_by_user_id: user.id },
              { members: { $in: [user.id] } },
            ],
          },
          limit: 1,
        });

        setCall(calls);
      } catch (error) {
        console.error(error);
      }
    };

    loadNearestCall();
  }, [client, user?.id]);

  return { call };
};
