import { useLocation } from 'react-router-dom';
import prepareLink, { PrepareLinkParams } from '@/utils/prepareLink';

const usePrepareLink = (options: PrepareLinkParams = {}): string => {
	const location = useLocation();

	return prepareLink(location, options);
};

export default usePrepareLink;
