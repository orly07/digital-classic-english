import { useQuery } from "@apollo/client";
import { GET_MISSION } from "../../graphql/queries/mission";
import { GET_VISION } from "../../graphql/queries/vision";
import { GET_CORE_VALUES } from "../../graphql/queries/coreValues";
import { GET_TEAM } from "../../graphql/queries/team";

export const useAbout = () => {
  const {
    data: missionData,
    loading: missionLoading,
    error: missionError,
  } = useQuery(GET_MISSION);
  const {
    data: visionData,
    loading: visionLoading,
    error: visionError,
  } = useQuery(GET_VISION);
  const {
    data: coreValuesData,
    loading: coreValuesLoading,
    error: coreValuesError,
  } = useQuery(GET_CORE_VALUES);
  const {
    data: teamData,
    loading: teamLoading,
    error: teamError,
  } = useQuery(GET_TEAM);

  const loading =
    missionLoading || visionLoading || coreValuesLoading || teamLoading;
  const error = missionError || visionError || coreValuesError || teamError;

  const coreValues =
    coreValuesData?.coreValues?.map((cv) => ({
      title: cv.title || [],
      icon: cv.icon || [],
      text: cv.text || [],
    })) || [];

  return {
    mission: missionData?.missions || [],
    vision: visionData?.visions || [],
    coreValues,
    team: teamData?.teams || [],
    loading,
    error,
  };
};
