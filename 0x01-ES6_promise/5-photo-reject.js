export default function uploadPhoto(filename) {
  return Promise.reject(Error(`${filename} can not be processed`));
}
