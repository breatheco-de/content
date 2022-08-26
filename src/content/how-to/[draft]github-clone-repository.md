---
title: "How to clone a github repository"
subtitle: "Cloning is the fastes way to download a project or code, in this lessons we will explain how to clone and the difference it has with forking"
tags: ["git","github"]
date: "2020-10-19T16:36:30+00:00"
authors: []
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
status: "draft"

---

# Github Clone Repository

Cloning a repository creates a local copy of the desired project/repository on your computer, which syncs between the two locations (Remote-Local).

In other words, cloning a repository means downloading a complete copy of it to your computer. And what does a complete copy mean? Well, it means that after cloning a repository you will have the entire history of the repository on your computer.

So why cloning a repository you may ask? Cloning a project has many benefits as:

- Browse the history of the project, seeing how it has evolved
- See the changes that have occurred in the code
- Know who and when has modified the code
- Access the branches of the project and create your own
- Start modifying the code, save the changes and add your work to the existing one

And all this without the need to be connected to the internet. We will only need internet connection when we want to "share" our work with someone else or we want to upload our work to Github.

<p align="center">
  <img src="https://c.tenor.com/AQM9IEdO0K8AAAAd/clone.gif" width='600px'/>
</p>

## Steps to Clone a Github Repository (Using the terminal)
To clone a Github repository, we do as follows:

 1. **Open the terminal (Git Bash can be used)**
	 It is extremely simple if Git is not already installed. Simply navigate to the [Git Download Folder](https://git-scm.com/downloads) and follow the on-screen instructions.
	 
 2. **Go to the directory/folder where you wish to add the cloned repository**
	Input `cd` and add the directory/folder location in the terminal. Let's say we want to clone the desired repository in the following folder `C:\Users\rafam\Programming Projects\my-first-cloned-repo`, you can also drag and drop the folder in the terminal and press enter:
<p align="center">
  <img src="https://lh3.googleusercontent.com/Is2xQzmc1GNUTjkKf4_euEq0Y31Qeva4W261sOPKEeJI-1TGIhO-Uk7TTjae_2tZD5NQBbclh3f8y_gYbgfU5rt6Ti1GTRKJQEWDI-F3UyR17fagEy6yfsbUDTOUgdnuMPExu7bTUqjSIyP2boViNom9FaaSrS8MI3rekrRdQFBJRDwv3unZU1mQ1YwdsTwMy49OqZKyS3PV3s79huebh8dXbTLQUfflSqumi5NzDOZ83o6USXt06gthcjMyj7JEmHBxgDmoKg4NDaiy4r5_Lcm12xZeQxc22cI4p0C27rHRQE_CigCEd371yXeEbRGEaGq5fiDbNK1j81SMTFDb-FoZmgQF2ECfMDxuYthpcMlydaw_NutrcIMwam9m6gpSvlcAgiQgLgYlEaXPc-g828zFcDUNw0SwRWA6SdOUj1vn8b0GcSwqqWL9usv7J8jJq3QtVKPcEwmg_RvUYOF1WmtXs46kQsALRHkYPwilkfdIWHj9qF53UHstEpd7rLN9NyaiVBAdhCpb7G1CE5GZjEdWo9xvwhF2fXe3vN9i4023c3o_Tn_m6G1q6JumBbJe9zYGoyHa3IDiL4sb6gBWdEKqxUctu0aJJBC6WGC0MTIpSGYcRLfbiLLUDEvuWKqBSXKN9o7Y_Ls-Jvo2q8wqpXWFkQFU4rOWELI3epkERC-Ruk06E3G0NkVnogR2vNN9HuVYXefDc1k2DSU-YhKEneT5YXrO6BTfFA7cafRmdDb3qYU49hUZpoaTI57bhpOfB0xEOe9UQV_uqP4rN4QiwHfGJfsQFTpGLKQ=w512-h260-no?authuser=0" width='600px'/>
</p>
<p align="center">
  <img src="https://lh3.googleusercontent.com/Uh4ekG9-57hM7hiBNqAnawbJzLEvnpiFuuIYb0uV5IwY_nhnATqI44Hq8xTyKv7qIc_l-ZyqKk7GsloyTF8AECm1I25kYoXUhM8l8V2P3rTpWh51bVfo8En-hfOdrmjf_wDCC1soqPh9tDJJBu38ZtychoWTBZ-UNwkRZoDBxLDo3W9CjNkKdB3-SFs5BNXlbA3da5OitrAYu0Dwdd0CiJxJ1lXaTLgnud2DVC5DDrTy-RnPLGsrFJZ1wV4Z3PIXyMDOQMC1e6fekri46ymDrAKJGNhf-ppSseAbYSE2c6PqNE6AGVQDWY6kOMBBk_7vTA9XGxCQk5Et-WJgX34kiwKh2fm2E8O1Bee_I9cCTgeojZRUPsEheDnadImT7ro5jKc30PmkTDOElvza_nxjf-J5J5UzdVwLEGI03fL50YvWVNQNLTKbz6S8cTXx3F3CLIJTQG7aORp638g7ET97GZpfFgiuzJKUGWt1fiV76wA9avd81Dgj2HN9dj7jo3_xgZqXDxc69sqb8J7a_I04KKPL5qfydkmclhBxykuStPTcurfNE-7Mi75IdSTleLw3uiwoKZeTwa06KDoM__JT3xopj7I5nihpAEqI8jpBA_4QgoYe1SGVMQ4hl-DKzqu2zSkR7O8hN910-BqWRk8h4-uAle_nxtczcQ2L4gP8ZcV2NkUjCTbptd_jRuYNnnBiGnZqwJNnhkr_zeK1zNQTwdTkLy-ZwE8SPRdltqv24TRGaC_zEm8R6ijAn0gjTn8imQjT15FHam64vaBFGkvFvVeI-7eVsoMCrsE=w612-h270-no?authuser=0" width='600px'/>
</p>

 3. **Visit the repository page that you want to clone**
	 For example, let's say we want to clone the following Github repository [4Geeks react-flask-hello](https://github.com/4GeeksAcademy/react-flask-hello)
<p align="center">
  <img src="https://lh3.googleusercontent.com/P67YuGMTe1mq7_NUR9oAd80utCCBsJSgkt6dZQWs7VQsSCfM6Hb_tVNUiSqYr8bO8mrffQQc33aNpFAqWEmoL7XpVShrrtvvBePxC2NFWAafeMwBWcaDgONI3m6Eyxtw2He0gkr9OAI9YSeT63iye3TkzSl0xLItDlEGNfG5jpOMzWAXSKSYZqX9TntCDbH6ZJNip5Kb4bwCe_TGcX4Fv0osGfXYxYTmufa9zC2Ms8Ud03GY6vLJ_DspPs49CTPemu0mELqDr-HRQErL688naVC7HRks2XjUEqpPKK86OJflk52Gs_spOgG3LCVVF6lO6vKK01c43Mc9GVpTqyFRvy4uIfPiEO-OdZTZFVCTlP6LD8e3pltdu88MiZLZL6vc5jCZ2cDbMODoCEgZS_nNb_51P9RRyMGD_3bsq6bum64NUg3VvQ1FxrJptEXdZ26LOx6ezJT0A8PE6-DWcM5yjC9L6tz4z57sAR6LWq6Dd37N3V3vW8JDzInF-1JdMzqtrRkPV_fyiNaLgQrKyAIoJrbcOFaJN54uxNhIaSGtqdB2Hn_ifYlaBy9I7NiZc4Sq5vxyroePFatPlnlDARgviuRZSp0gvOQttX-46FB2rTLWmfEdkXN-P-n5RLeSmOqJmw7i4NuvJimkTnTtzvXPsof_jpzWuFKkUydwK3XQ-H7mJNbaYjt-QDL7bRSjhtwZJUpeknpx8kqj2mgQuVxhUU6WPIT9RQg0vMh-IVJ-8R1ztQv69HiG423kz3Y9nrUBLU0Ar_1X10VItKZPAebxI77UGbfPFJlWAzY=w1316-h636-no?authuser=0" width='850px'/>
</p>

 4. **Click on Code and copy the URL clicking on the highlighted button**
<p align="center">
  <img src="https://lh3.googleusercontent.com/FIyKne3P4-rE2rgAErMqceXwP427SAKLal5FcSSiOzKWMJ7pFeuWwCpSLMX7qBybWeutX4XKSnICmChXgyCoyo7DUI541vEk9_44FXKJgGjNFqH8PrBF04SN4cEQIrkeJ7-EHMIHGyrme73JpVuDuPVaABz7Dg1UWaWpy8JPRwl8Mq1EJdhA94cbIDzv_EVxe4iuYX7lVKshbskVlMlpBBLPw7teC4b9JraJiJSpNFGPikCX6yi6JpLJ7jPeQkAWfSBdyLZfylt84EUj9Iy-B1t9t82b2-BOiQEDO88XI3ImGzerTKqWJ4sOq_D39CEGlkwISmJkogpChsxuRQQOsrUcB4yo996V52u6QuVInd9WF5KEdgeU0e6lC4f7Nlf_GvBi4pM-DPZmnUOh5_kKm29JUot9hSCoNKlpZnwjnQbJ0ZpduHhaQw835bCYyO7CNmgQnL4vFOLrlOof_AzqhrA7ZSFVvJQzemuEmN08XbUfZcLSXUVlrsyFL8c58jWIczsrtFM5hcDJaLXxTnQiyxiy-cMV1PzHpSpzXVUxrVkhtSzp4iFodzV__RzCdibxAsK4oXoCiTiSPxfKCG1_tF1c2HLIn4DIGMSwMAWMs7dbp7IPsokKJ6ND-b633MROEsXSHGEsO0lKAHVtHkJCqzLBWgp4LfglSPVen9n49WnNnmFSNAsYvdZANy_q1nwilN87YhPW9-d7mTdym3-trceGnqZGx2gMXQWuec6V-jaHHNf2jJw4TPtliGUCNlAqQItTjh5Qb3FSyohyUy8ZYAVo3i11IczrsZs=w1316-h675-no?authuser=0" width='850px'/>
</p>

 5. **Use the git clone command typing `git clone` along with the earlier copied URL**
 `$ git clone https://github.com/4GeeksAcademy/react-flask-hello.git`
<p align="center">
  <img src="https://lh3.googleusercontent.com/f7pYO15Zi0kGWurkea8kTWAlOB1-_UrwxKcydJivwsLqXJZPEqwyrOyVQUeVzIEYlVwNe1ThJLuwxsz6gUn0kFh9-wZIe0r8ghw_tX3ON4fQxzRLjcYYWb0rfuMum7IroYIlPdUiP8IHFEwJHEEDKioi394zK8MfAv8Lw3r6mo5Aas_Aq-gdt81u1E30la_k-h1do6mFhYxAfqnu8kOt_A7zU-nUOAE4SpZvYTt7tNqSvLkgafgn3DuAtU8dpYmDJNadThkYE4zDUL5GhlFY_Uyc0TZ24gkLsOkx79olp1Q8Y0Z_hlM-WEqdF9K5OjMDKIe3rgAn8zMjP8ftfxZseK-StbIpEqHOcq3wOmEUuxCLXZpuVIUybGkbllNN7hhz3ED3VPaidBH54G6lYCjl-4nrrxlN2DOb16pL64TrHW0BV11SVFxZQVxAE8-_f2egfi6t_rHnAyM4YHeQ-LN1XXXwe4uKXSkxPHst_BBzLW--m_uUu1dxhtS7IPvr6EblHuDrZ-Q0ycGe-lHII4e4jH4hvka8ztBIyZKKcwfRZqzw5NtPk8zS-u3ihnjP5maUqwHLpuujDtk9MYZxZGbdvDFTaPgPNq3FXj8dDSyP5LDcrN1iA4v-Hui3jkEk8meq75ew4lRPm2TOUoQUqHxOqnJ2ARp_t8Mgo6HL10_w35zP0QGstYs3WP5DuC9bN5IcsBSlcygx_LIKYPxsBe4RpqtKv57GPiQjclxJQ6Kr4r0WeOZIY_IOCsXAT-KQZ9uTDqpK_OLbV-DFwhIHegC8XtidB2DyGMB2VrE=w613-h269-no?authuser=0" width='600px'/>
</p>

 6. **Press enter and the repository will be cloned**
 <p align="center">
  <img src="https://lh3.googleusercontent.com/I1ot6XpCG_VdxVua7-fz1znESDqAfQYHd2eWAOezWwmHzChgIzFdJGZbm_uOUpPpxY39i0IFayoVHaU3LbwaW-bX6otK1E_iylifvxCLGIymZo-4WexEgkmCND8O9tWVGdINIRt-u2eUsQxYjTPozTDdaEQq6BJMwGUfn6GMJYzgljgjpH1q-tjVtOctPIic82O_xrM0cdmJ-ryPMhAybMT_5-KILeQbU_52xApPFy2EFLkg_wJoT7WeA8qTHrz_fNsyrIwpzvw7IvCckDDXMd6OfG9S0RWNiFXC45jdqezWrwgpBW5WbZ0182spZqacaDfoj0BurZ25UHCO_zgFoJXQFoViow2gJnMo7TsPSmMYCsqc3W5_MdDLCBNgNn46CGWJni9aco9JOl8EXj10tmvcD5l1sKxfshzToG2W0DdkkHIofPdub8ubRpBu2g1Zd2mzl7LGWi00KKmXr2lj24jf8FavvZp6CkgB_fWLQeITG2ZLD8iLFLEN5Ci2R86wiZ4vMRXDIk7pkdRzlcAAgqlAK2zdqmYHl0SrxNokO4pw7_8wQThvq8KMfKEEyjHm8Op2tIKlQT1DDeySx8F-_o_1biPK0HAdDOwcdDMNWz8yEqBHmDrGCdfev6WtvLYz1cak2gbpTdoP6JoOI0_OJK9E7LfGMjGYmAyUhNMQSnynLD4IFnrnuIUqWKXN6TUEvgrb_9xHrV78bHTjLxDumfeiYvfrC0pLbMBUc06etCLWM_5S-Yx-_kgAeUL9neJYvmhuSIubP0QEa0YNAe2g4UtCtBcrQ9qnEe0=w613-h219-no?authuser=0" width='600px'/>
</p>
