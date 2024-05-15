import React from 'react';

interface ProfileCardProps {
    name: string;
    role: string;
    description: string;
    photo: string;
    githubUrl?: string;
    linkedinUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    role,
    description,
    photo,
    linkedinUrl,
    githubUrl,
}) => {
    return (
        <div className="col-md-8">
            <div className="card card-profile card-plain">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="position-relative">
                            <div className="blur-shadow-image">
                                <img className="w-100 rounded-3 shadow-lg" src={photo} alt={name} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 ps-0 my-auto">
                        <div className="card-body text-left">
                            <div className="p-md-0 pt-3">
                                <h5 className="font-weight-bolder mb-0">{name}</h5>
                                <p className="text-uppercase text-sm font-weight-bold mb-2">{role}</p>
                            </div>
                            <p className="mb-4">{description}</p>
                            <div>
                                {linkedinUrl && (
                                    <a href={linkedinUrl} target="_blank" className="btn btn-linkedin btn-simple btn-lg mb-0 px-2">
                                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                )}
                                {githubUrl && (
                                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-github btn-simple btn-lg mb-0 px-2">
                                        <i className="fab fa-github" aria-hidden="true"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
