1) อัปโหลดโค้ดนี้ขึ้น GitHub
2) Vercel → Add New Project → เลือก repo
3) เพิ่ม ENV:
   - DATABASE_URL=postgresql://USER:PASSWORD@HOST/DB?sslmode=require
   - ADMIN_EMAIL=admin@nationnestproperty.com
   - ADMIN_PASSWORD=demo1234
4) Deploy (Vercel จะ migrate + seed ให้เอง)
