import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

export default function EducationProfileForm({basic}){

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        gelar_depan: basic == null ? '' : basic.gelar_depan,
        gelar_belakang: basic == null ? '' : basic.gelar_belakang,
        lulusan: basic == null ? '' : basic.lulusan,
    });
    console.log(data);
    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route('admin.social-profile.save'), {
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
                <InputLabel for="gelar_depan" value="Gelar Depan" />

                <TextInput
                    id="gelar_depan"
                    className="mt-1 block w-full"
                    value={data.gelar_depan}
                    handleChange={(e) => setData('gelar_depan', e.target.value)}
                    required
                    isFocused
                    autoComplete="name"
                />

                <InputError className="mt-2" message={errors.name} />
            </div>

            <div className='mb-3'>
                <InputLabel for="gelar_belakang" value="Gelar Belakang" />

                <TextInput
                    id="gelar_belakang"
                    className="mt-1 block w-full"
                    value={data.gelar_belakang}
                    handleChange={(e) => setData('gelar_belakang', e.target.value)}
                    required
                    isFocused
                    autoComplete="name"
                />

                <InputError className="mt-2" message={errors.name} />
            </div>

            <div className='mb-3'>
                <InputLabel for="lulusan" value="Lulusan" />

                <TextInput
                    id="lulusan"
                    className="mt-1 block w-full"
                    value={data.lulusan}
                    handleChange={(e) => setData('lulusan', e.target.value)}
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