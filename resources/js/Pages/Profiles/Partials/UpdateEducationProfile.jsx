import EducationProfileForm from './EducationProfileForm';
import { usePage } from '@inertiajs/react';

export default function UpdateEducationProfile() {
    const education = usePage().props.educationProfile;
    return (
        <div className="col-md-6 col-xl-6">
          <div className="card card-one">
            <div className="card-header">
              <h6 className="card-title">Education Profile</h6>
            </div>
            <div className="card-body">
                {education == null && <div className="alert alert-danger" role="alert">Anda belum mengisi data diri</div>}
                <EducationProfileForm basic={education} />
            </div>
          </div>
        </div>
    );
}
