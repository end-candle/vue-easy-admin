<template>
    <user-layout>
        <typography size="big-title">{{ $t('user.basicSetting') }}</typography>
        <el-form ref="userForm" :model="userForm" :rules="rules" class="mt24">
            <div class="user-form__body">
                <el-form-item :label="$t('user.nick')" prop="nickname" class="mb12">
                    <el-input v-model="userForm.nickname"></el-input>
                </el-form-item>
                <el-form-item :label="$t('user.email')" prop="email" class="mb12">
                    <el-input v-model="userForm.email" type="email"></el-input>
                </el-form-item>
                <el-form-item :label="$t('user.sign')" prop="personalSign" class="mb12">
                    <el-input
                        v-model="userForm.personalSign"
                        type="textarea"
                        :placeholder="$t('user.inputSign')"
                        rows="6"
                    ></el-input>
                </el-form-item>
                <el-form-item :label="$t('user.country')" prop="country" class="mb12">
                    <el-select
                        v-model="userForm.country"
                        :placeholder="$t('common.select')"
                        class="w100"
                    >
                        <el-option
                            v-for="item in countryList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('common.provinceAndCity')" prop="address" class="mb12">
                    <div class="flex w100">
                        <el-select
                            v-model="userForm.province"
                            filterable
                            :placeholder="$t('common.selectProvince')"
                        >
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
                            :placeholder="$t('common.selectCity')"
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
                            :placeholder="$t('common.selectArea')"
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
                <el-form-item :label="$t('common.address')" prop="streetAddress" class="mb12">
                    <el-input v-model="userForm.streetAddress"></el-input>
                </el-form-item>
                <el-form-item :label="$t('common.phone')" prop="phone">
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
                    <el-button type="primary" @click="submitForm('userForm')">{{
                        $t('common.updateInfo')
                    }}</el-button>
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
                    <el-button size="small">{{ $t('common.upload') }}</el-button>
                    <template #tip>
                        <div class="el-upload__tip">{{ $t('common.uploadTip') }}</div>
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
import i18n from '@i18n/index';
export default {
    name: 'UserBaseSetting',
    components: { Typography, UserLayout },
    data() {
        return {
            countryList: [
                {
                    label: i18n.t('common.china'),
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
