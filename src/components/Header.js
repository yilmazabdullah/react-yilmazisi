import React from 'react';
import { MdPhone, MdEmail } from 'react-icons/md';
import { CgTwitter, CgFacebook, CgGoogle, CgMail } from 'react-icons/cg';
import { FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
	return (
		<div className="row justify-content-between p-2  ">
			<div className="col-6 cursor ">
				<MdPhone />0 123 456 78 90 <MdEmail /> yilmaz@deneme.com
			</div>

			<div className="col-2 cursor ">
				<CgTwitter className="border rounded mr-1" />
				<CgFacebook className="border rounded mr-1 " />
				<CgGoogle className="border rounded mr-1 " />
				<CgMail className="border rounded mr-1" />
				<FaLinkedinIn className="border rounded" />
			</div>
		</div>
	);
};

export default Header;
