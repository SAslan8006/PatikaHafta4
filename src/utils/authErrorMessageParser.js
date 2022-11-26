export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz e-mail';
    case 'auth/weak-password':
      return 'Parola çok zayıf';
    case 'auth/wrong-password':
      return 'Parola geçersiz';
    case 'auth/email-already-exists':
      return 'Sağlanan e-posta zaten mevcut bir kullanıcı tarafından kullanılıyor. Her kullanıcının benzersiz bir e-posta adresi olmalıdır.';
    case 'auth/id-token-revoked':
      return 'Firebase ID belirteci iptal edildi.';
    case 'auth/internal-error':
      return 'Kimlik doğrulama sunucusu, isteği işlemeye çalışırken beklenmeyen bir hatayla karşılaştı.';
    case 'auth/invalid-argument':
      return 'Bir Kimlik Doğrulama yöntemine geçersiz bir bağımsız değişken sağlandı. Hata mesajı ek bilgiler içermelidir.';
    case 'auth/invalid-page-token':
      return 'listUsers() içinde sağlanan sonraki sayfa belirteci geçersiz. Geçerli, boş olmayan bir dize olmalıdır.';
    case 'auth/invalid-password':
      return 'password kullanıcı özelliği için sağlanan değer geçersiz. En az altı karakterden oluşan bir dize olmalıdır.';
    case 'auth/invalid-user-import':
      return 'İçe aktarılacak kullanıcı kaydı geçersiz.';
    case 'auth/session-cookie-revoked':
      return 'Firebase oturum çerezi iptal edildi.';
    case 'auth/uid-already-exists':
      return 'Sağlanan uid zaten mevcut bir kullanıcı tarafından kullanılıyor. Her kullanıcının benzersiz bir uid olmalıdır.';
    case 'auth/unauthorized-continue-uri':
      return "Devam URL'sinin etki alanı beyaz listeye alınmadı. Firebase Konsolunda alanı beyaz listeye alın.";
    case 'auth/user-not-found':
      return 'Sağlanan tanımlayıcıya karşılık gelen mevcut bir kullanıcı kaydı yok';
    default:
      return 'Beklenmeyen bir hata oluşmuştur.';
  }
}
