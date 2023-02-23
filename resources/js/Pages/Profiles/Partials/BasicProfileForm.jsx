import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

export default function BasicProfileForm({basic}){

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        no_telp: basic == null ? '' : basic.no_telp,
        jenis_kelamin: basic == null ? 0 : basic.jenis_kelamin,
        tanggal_lahir: basic == null ? new Date() : new Date(basic.tanggal_lahir)
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.basic-profile.save'), {
            onSuccess: (page) => {
                Swal.fire(
                    'Berhasil',
                    'Profil berhasil di simpan',
                    'success'
                );
            }
        });
    };

    return (
        <form onSubmit={submit} className="mt-6 space-y-6">
                    
            <div className='mb-3'>
                <InputLabel for="tanggal_lahir" value="Tanggal Lahir" />
                
                <DatePicker 
                    showIcon
                    id="tanggal_lahir"
                    className="form-control mt-1 block w-full"
                    selected={data.tanggal_lahir}
                    onChange={(date) => setData('tanggal_lahir', date)}
                />

                <InputError className="mt-2" message={errors.name} />
            </div>

            <div className='mb-3'>
                <InputLabel for="jenis_kelamin" value="Jenis Kelamin" />
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="jenis_kelamin" id="Laki-laki" onChange={(e) => setData('jenis_kelamin', 1)} checked={data.jenis_kelamin} />
                    <label className="form-check-label" htmlFor="Laki-laki">
                        Laki-laki
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="jenis_kelamin" id="Perempuan" onChange={(e) => setData('jenis_kelamin', 0)} checked={!data.jenis_kelamin} />
                    <label className="form-check-label" htmlFor="Perempuan">
                        Perempuan
                    </label>
                </div>
            </div>

            <div className='mb-3'>
                <InputLabel for="no_telp" value="Nomor Telepon" />

                <TextInput
                    id="no_telp"
                    className="mt-1 block w-full"
                    value={data.no_telp}
                    handleChange={(e) => setData('no_telp', e.target.value)}
                    required
                    isFocused
                    autoComplete="name"
                />

                <InputError className="mt-2" message={errors.name} />
            </div>

            <div className="flex items-center gap-4">
                <PrimaryButton processing={processing}>Save</PrimaryButton>

                <Transition
                    show={recentlySuccessful}
                    enterFrom="opacity-0"
                    leaveTo="opacity-0"
                    className="transition ease-in-out"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                </Transition>
            </div>
        </form>
    );
}