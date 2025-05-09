

const btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    const username =document.getElementById('username').value;
    const box = document.getElementById('cart');
    console.log();
    
    if(username){
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json()).then(data => {
            if(data.message == "Not Found"){
                alert('المستخدم غير موجوج')
            }else{
                display(data);
            }

        })
         
         

    }else{
        alert('ples enter username')
    }
    
    })    
    
function display(user){
        const profile =document.getElementById('cart');
        profile.classList.remove('d-none');
        profile.innerHTML =`
         
            <div class="profil">
                <img src="${user.avatar_url}" alt="">
                <h2>${user.login}</h2>
            </div>
            <div class="bio">${user.bio}</div>
            <ul>
                <li>
                    <span>${user.followers}</span>
                    المتابعين
                </li>
                <li>
                    <span>${user.following}</span>
                    المتابعون
                </li>
                <li>
                    <span>${user.public_repos}</span>
                    المستودع
                </li>
            </ul>
            <a  class="btn" href="${user.html_url}" target="_blank" >
                <button>
                    لمشاهدة الحساب
                </button>
            </a>
 
      
        
        `
}