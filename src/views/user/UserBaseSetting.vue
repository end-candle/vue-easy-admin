<template>
    <user-layout>
        <typography size="big-title">基础设置</typography>
        <el-form ref="userForm" :model="userForm" :rules="rules" class="mt24">
            <div class="user-form__body">
                <el-form-item label="昵称" prop="nickname" class="mb12">
                    <el-input v-model="userForm.nickname"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email" class="mb12">
                    <el-input v-model="userForm.email" type="email"></el-input>
                </el-form-item>
                <el-form-item label="个性签名" prop="personalSign" class="mb12">
                    <el-input
                        v-model="userForm.personalSign"
                        type="textarea"
                        placeholder="请输入个性签名"
                        rows="6"
                    ></el-input>
                </el-form-item>
                <el-form-item label="国家" prop="country" class="mb12">
                    <el-select v-model="userForm.country" placeholder="请选择" class="w100">
                        <el-option
                            v-for="item in countryList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="省市区" prop="address" class="mb12">
                    <div class="flex w100">
                        <el-select v-model="userForm.province" filterable placeholder="请选择省">
                            <el-option
                                v-for="item in provinces"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                            >
                            </el-option>
                        </el-select>
                        <el-select
                            v-model="userForm.city"
                            filterable
                            placeholder="请选择市"
                            class="ml8"
                        >
                            <el-option
                                v-for="item in cities"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                            >
                            </el-option>
                        </el-select>
                        <el-select
                            v-model="userForm.county"
                            filterable
                            placeholder="请选择区"
                            class="ml8"
                        >
                            <el-option
                                v-for="item in counties"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                            >
                            </el-option>
                        </el-select>
                    </div>
                </el-form-item>
                <el-form-item label="详细地址" prop="streetAddress" class="mb12">
                    <el-input v-model="userForm.streetAddress"></el-input>
                </el-form-item>
                <el-form-item label="电话号码" prop="phone">
                    <div class="flex w100">
                        <el-input
                            v-model="userForm.phoneRegionCode"
                            class="w120"
                            placeholder="+86"
                        ></el-input>
                        <el-input v-model="userForm.phone" type="tel" class="ml8"></el-input>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('userForm')">更新信息</el-button>
                </el-form-item>
            </div>
            <div class="user-form__footer text-center">
                <el-avatar
                    src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                    :size="144"
                />
                <el-upload
                    class="mt24"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :limit="3"
                    :show-file-list="false"
                >
                    <el-button size="small">点击上传</el-button>
                    <template #tip>
                        <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </template>
                </el-upload>
            </div>
        </el-form>
    </user-layout>
</template>

<script>
import UserLayout from '@views/user/UserLayout';
import Typography from '@components/Typography';
import provinces from '@assets/json/province.json';
import cities from '@assets/json/city.json';
import counties from '@assets/json/county.json';
export default {
    name: 'UserBaseSetting',
    components: { Typography, UserLayout },
    data() {
        return {
            countryList: [
                {
                    label: '中国',
                    value: 'zh-CN'
                }
            ],
            provinces,
            userForm: {
                nickname: 'test',
                email: 'testemail@gmail.com',
                personalSign: '',
                country: 'zh-CN',
                province: '500000000000',
                city: '500100000000',
                county: '500114000000',
                streetAddress: '',
                phone: '',
                phoneRegionCode: '+86'
            },
            rules: {
                nickname: [
                    { required: true, message: '请输入昵称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
                streetAddress: [{ required: true, message: '请输入街道信息', trigger: 'blur' }],
                phone: [
                    { required: true, message: '请输入电话号码', trigger: 'blur' },
                    { pattern: /^1\d{10}$/, message: '请输入正确的电话号码', trigger: 'blur' }
                ]
            }
        };
    },
    computed: {
        cities() {
            return cities[this.userForm.province];
        },
        counties() {
            return counties[this.userForm.city];
        }
    },
    watch: {
        'userForm.province'() {
            this.userForm.city = '';
            this.userForm.county = '';
        },
        'userForm.city'() {
            this.userForm.county = '';
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.user-form__body {
    display: inline-block;
    width: 328px;
}

.w120 {
    width: 120px;
}

.user-form__footer {
    display: inline-block;
    vertical-align: top;
    padding-left: 144px;
}
</style>
