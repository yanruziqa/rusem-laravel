import BasicProfileForm from "./BasicProfileForm";
import { usePage } from '@inertiajs/react';

export default function UpdateBasicProfile() {
    const basic = usePage().props.basicProfile;
    return (
        <div className="col-md-6 col-xl-6">
          <div className="card card-one">
            <div className="card-header">
              <h6 className="card-title">Basic Profile</h6>
            </div>
            <div className="card-body">
                {basic == null && <div className="alert alert-danger" role="alert">Anda belum mengisi data diri</div>}
                <BasicProfileForm basic={basic} />
            </div>
          </div>
        </div>
    );
}
