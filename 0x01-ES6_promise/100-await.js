import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  if (photo === null) {
    return {
      photo: {},
      user: {},
    };
  }

  return {
    photo: { status: photo.status, body: photo.body },
    user: { firstName: user.firstName, lastName: user.lastName },
  };
}
