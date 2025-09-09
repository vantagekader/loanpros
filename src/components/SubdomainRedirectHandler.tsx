import { Navigate, useParams } from "react-router-dom";

interface SubdomainRedirectHandlerProps {
  targetPath: string;
}

const SubdomainRedirectHandler: React.FC<SubdomainRedirectHandlerProps> = ({ targetPath }) => {
  const { path = "" } = useParams<{ path: string }>();
  const redirectPath = path ? `${targetPath}/${path}` : targetPath;
  return <Navigate to={redirectPath} replace />;
};

export default SubdomainRedirectHandler;